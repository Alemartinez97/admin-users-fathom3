import { IAppointmentModel, Appointment } from "../models/appointment.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const appointmentRepository: Appointment = {
    createAppointment: async (payload: IAppointmentModel): Promise<IAppointmentModel> => {
        return prisma.appointment.create({
            data: payload,
        })
    },
}


export default appointmentRepository;