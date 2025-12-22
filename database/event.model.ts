import { Schema, model, models } from 'mongoose';

export interface IEvent {
    title: string;
    slug: string;
    description: string;
    overview: string;
    image: string;
    venue: string;
    location: string;
    date: string;
    time: string;
    mode: 'online' | 'offline' | 'hybrid';
    audience: string;
    agenda: string[];
    organizer: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
    {
        title: { type: String, required: true, trim: true, maxlength: 100 },
        slug: { type: String, unique: true, lowercase: true },
        description: { type: String, required: true, maxlength: 1000 },
        overview: { type: String, required: true, maxlength: 500 },
        image: { type: String, required: true },
        venue: { type: String, required: true },
        location: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        mode: {
            type: String,
            enum: ['online', 'offline', 'hybrid'],
            required: true,
        },
        audience: { type: String, required: true },
        agenda: { type: [String], required: true },
        organizer: { type: String, required: true },
        tags: { type: [String], required: true },
    },
    { timestamps: true }
);

EventSchema.pre('save', function () {
    if (this.isNew || this.isModified('title')) {
        this.slug = this.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');
    }

    if (this.isModified('date')) {
        const d = new Date(this.date);
        if (isNaN(d.getTime())) throw new Error('Invalid date');
        this.date = d.toISOString().split('T')[0];
    }

    if (this.isModified('time')) {
        const match = this.time.match(/^(\d{1,2}):(\d{2})(\s*(AM|PM))?$/i);
        if (!match) throw new Error('Invalid time format');

        let h = parseInt(match[1], 10);
        const m = match[2];
        const p = match[4]?.toUpperCase();

        if (p === 'PM' && h !== 12) h += 12;
        if (p === 'AM' && h === 12) h = 0;

        this.time = `${h.toString().padStart(2, '0')}:${m}`;
    }
});

const Event = models.Event || model<IEvent>('Event', EventSchema);
export default Event;
