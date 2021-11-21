

namespace WebApplication1.Models
{
    public class Empleado
    {
        internal object id;
        internal object fecha;
        internal object clienteId;
        internal object servicioId;

        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public int Cliente_Id { get; set; }
        public int Servicio_Id { get; set; }
    }
}
