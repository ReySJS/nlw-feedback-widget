import { prisma } from '../../prisma';
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../feedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({
    type,
    userId,
    userName,
    comment,
    screenshot,
  }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        userId,
        userName,
        comment,
        screenshot,
      },
    });
  }
}
