import { Schema, model, models, Types } from 'mongoose';
import Event from './event.model';

export interface IBooking {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
    {
      eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
    },
    { timestamps: true }
);

BookingSchema.pre('save', async function () {
  if (!this.isNew && !this.isModified('eventId')) return;

  const exists = await Event.exists({ _id: this.eventId });
  if (!exists) {
    throw new Error(`Event with ID ${this.eventId.toString()} does not exist`);
  }
});

const Booking =
    models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
