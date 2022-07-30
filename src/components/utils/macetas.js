const macetas = [
    
    {
       id: 1,
       categoria:"Clásica",
       url:"https://images.unsplash.com/photo-1633085272651-bf742a5db47e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBsYW50YSUyMGVuJTIwbWFjZXRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
       medida: "N10 Chica",
       color:"Fucsia",
       precio: 600,
       stock: 200,
    },
    {
       id: 2,
       categoria:"Clásica",
       url:"https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhY3R1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
       medida: "N12 Mediana",
       color:"Fucsia",
       precio: 700,
       stock: 200
    },
    {
       id: 3,
       categoria:"Clásica",
       url:"https://images.unsplash.com/photo-1493834685523-df9beaf95762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNhY3R1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
       medida: "N14 Grande",
       color:"Fucsia",
       precio: 800,
       stock: 200
    },
    {
       id: 4,
       categoria:"Clásica",
       url:"https://images.unsplash.com/photo-1554380941-51b202f69916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBsYW50YSUyMGVuJTIwbWFjZXRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
       medida: "N20 Extra Grande",
       color:"Negra",
       precio: 1000,
       stock: 200
    },
    {
       id: 5,
       categoria:"Icono",
       url:"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRhJTIwZW4lMjBtYWNldGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
       medida: "N10 Chica",
       color:"Celeste",
       precio: 600,
       stock: 200
    },
    {
       id:6,
       categoria:"Icono",
       url:"https://images.unsplash.com/photo-1568484705538-f93c45da418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3dlciUyMHBvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
       medida: "N12 Mediana",
       color:"Azul",
       precio: 700,
       stock: 200
    },
    {
       id:7,
       categoria:"Icono",
       url:"https://images.unsplash.com/photo-1609062111394-0427aa22d6c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80",
       medida: "N14 Grande",
       color:"Blanca",
       precio: 800,
       stock: 200
    },
    {
       id:8,
       categoria:"Icono",
       url:"https://images.unsplash.com/photo-1557090495-fc9312e77b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnRhJTIwZW4lMjBtYWNldGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
       medida: "N20 Extra Grande",
       color:"Blanca",
       precio: 1000,
       stock: 200
    },
    {
       id:9,
       categoria:"Cilindro",
       url:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
       medida: "N10 Chica",
       color:"Blanca",
       precio: 600,
       stock: 200
    },
    {
       id:10,
       categoria:"Cilindro",
       url:"https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
       medida: "N12 Mediana",
       color:"Celeste",
       precio: 700,
       stock: 200
    },
    {
       id:11,
       categoria:"Cilindro",
       url:"https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
       medida: "N14 Grande",
       color:"Blanca",
       precio: 800,
       stock: 200
    },
    {
       id:12,
       categoria:"Cilindro",
       url:"https://images.unsplash.com/photo-1620803366004-119b57f54cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50YSUyMGVuJTIwbWFjZXRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
       medida: "N20 Extra Grande",
       color:"Negra",
       precio: 1000,
       stock: 200
    }
]
export default macetas;