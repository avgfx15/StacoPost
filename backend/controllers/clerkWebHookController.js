import { Webhook } from 'svix';
import UserModel from '../models/userModel.js';

export const clerkWebHookController = async (req, res) => {
  const WEBHOOKS_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOKS_SECRET) {
    throw new Error('Need Webhooks Secret');
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOKS_SECRET);

  let evt;
  try {
    evt = await wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({ message: 'Webhook verify Failed!' + err });
    return;
  }

  if (evt.type === 'user.created') {
    const newUser = new UserModel({
      clerkId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      profileImage: evt.data.image_url,
    });
    console.log(newUser);
    await newUser.save();
  }

  return res.status(200).json({ messge: 'Successfull Login!' });
};
