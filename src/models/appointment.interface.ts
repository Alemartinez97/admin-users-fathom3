export interface Appointment {
    createAppointment(payload: IAppointmentModel): Promise<IAppointmentModel>;
}


export interface IAppointmentModel {
    id?: any,
    date: any,
    type: any,
    userId: any,
}