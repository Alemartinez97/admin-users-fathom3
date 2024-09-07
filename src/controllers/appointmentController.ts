import appointmentService from "../services/appointmentService";

export const createAppointment = async (req: any, res: any) => {
    try {
        const payload = req.body;

        if (!payload || Object.keys(payload).length === 0) {
            return res.status(400).send({ error: "Se requiere un cuerpo de solicitud válido." });
        }

        const users = await appointmentService.createAppointment(payload);
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al crear el turno" });
    }
}