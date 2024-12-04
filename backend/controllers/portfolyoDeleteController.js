export default portfolyoDelete = async (req, res) => {
  const { id } = req.params;

  try {
    await PortfolyoModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Portfolio deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting Portfolio', error: err });
  }
};