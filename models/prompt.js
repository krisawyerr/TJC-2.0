import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Title is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Location is required.'],
  },
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
  },
  content: {
    type: String,
    required: [true, 'Content is required.'],
  },
  photo: {
    type: String,
    required: false,
},
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;