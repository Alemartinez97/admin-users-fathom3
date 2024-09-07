import { Appointment, IAppointmentModel } from "../models/appointment.interface";
import appointmentRepository from "../repositories/appointmentRepository";

const userService: Appointment = {
    createAppointment: async (payload: IAppointmentModel): Promise<IAppointmentModel> => {
        try {
            const result = await appointmentRepository.createAppointment(payload);
            console.log(result)
            return result;
        } catch (error) {
            console.error(`Error en createUser: ${error}`);
            throw error;
        }
    }
}

export default userService;