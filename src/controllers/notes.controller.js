const { prisma } = require("../../prisma/prisma")

exports.getAll = async (req, res) => {
  try {
    let notes = await prisma.notes.findMany({ where: { userId: req.user.id } });

    return res.json({
      success: true,
      message: '',
      notes
    })

  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.query;

    let note = await prisma.notes.findUnique({ where: { id } });

    if (!note) {
      return res.json({
        success: false,
        message: "Note doesn't exist!"
      })
    }

    return res.json({
      success: true,
      message: '',
      note
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

exports.addOne = async (req, res) => {
  try {
    const note = await prisma.notes.create({
      data: {
        ...req.body,
        // createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
        userId: req.user.id
      }
    });
    return res.json({
      success: true,
      note,
      message: 'Note added successfully'
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

exports.deleteOne = async (req, res) => {
  try {
    let { id } = req.params;

    id = parseInt(id);

    let note = await prisma.notes.findUnique({ where: { id } });

    if (!note) {
      return res.json({
        success: false,
        message: "Note doesn't exist!"
      })
    }

    await prisma.notes.delete({ where: { id } });

    return res.json({
      success: true,
      message: 'Note deleted successfully'
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

exports.deleteOld = async (req, res) => {
  try {
    let expDate = new Date(new Date().setDate(new Date().getDate() - 3));
    await prisma.notes.deleteMany({ where: { createdAt: { lt: expDate } } });
    return res.json({
      success: true,
      message: 'All notes older than 3 days were deleted successfully'
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

exports.deleteAll = async (req, res) => {
  try {
    await prisma.notes.deleteMany({ where: { userId: req.user.id } });

    return res.json({
      success: true,
      message: 'All notes were deleted successfully'
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

