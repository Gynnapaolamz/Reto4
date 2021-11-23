using System;

namespace WebApplication1.Models
{
    public class Pedido
    {
        internal object id;
        internal object fecha;
        internal object clienteId;
        internal object platoId;

        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public int Restaurante_Id { get; set; }
        public int Plato_Id { get; set; }
    }
}
