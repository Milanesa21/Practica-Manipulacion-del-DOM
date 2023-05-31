const recetas = [
    {
      titulo: "Pizza",
      descripcion: "Deliciosa pizza casera con ingredientes frescos.",
      imagen: "https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
    },
    {
      titulo: "Sushi",
      descripcion: "Rolls de sushi elaborados con pescado fresco y arroz.",
      imagen:
        "https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg",
    },
    {
      titulo: "Pastel de Chocolate",
      descripcion: "Irresistible pastel de chocolate con cobertura de ganache.",
      imagen:
        "https://imag.bonviveur.com/pastel-de-chocolate.webp",
    },
    {
      titulo: "Ensalada Caprese",
      descripcion: "Ensalada fresca con tomate, mozzarella y albahaca.",
      imagen:
        "https://i.blogs.es/5ca73e/ensalada-caprese-rehacer-pakus-dap/1366_2000.jpg",
    },
    {
      titulo: "Tacos",
      descripcion: "Tacos mexicanos con carne, cebolla y salsa picante.",
      imagen:
        "https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg",
    },
  ];
  
  const container = document.getElementById("container");
  
  container.innerHTML += recetas
    .map((receta) => {
      return `
          <div class="card my-card d-flex" style="max-width: 18rem;">
              <img src="${receta.imagen}" class="card-img-top my-img" alt="${receta.titulo}">
              <div class="card-body ">
                  <h5>${receta.titulo}</h5>
                  <p>${receta.descripcion}</p>
              </div>
          </div>
      `;
    })
    .join("");
  