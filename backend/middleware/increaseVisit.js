import PostModel from '../models/postModel.js';

const increaseVisit = async (req, res, next) => {
  const slug = req.params.slug;
  await PostModel.findOneAndUpdate({ slug }, { $inc: { visitorsNo: 1 } });
  next();
};

export default increaseVisit;
