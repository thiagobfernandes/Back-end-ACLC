import { where } from "sequelize";
import Autor from "./autor.js"
//regras de negocio
async  function findAll(){
    console.log("Retornando pelo service")
  return  await Autor.findAll();
}

async function findbyId(id) {
    return await Autor.findAll({
        where: {
            id:id


        }
    }
  )}
  async function findbynome(nome) {
    return await Autor.findAll({
      where: {
        nome:nome
      }

    })
  }

  async function save(autor) {
    return Autor.create({
      nome: autor.nome
    });
  }


  async function update(autor,id) {
    return await Autor.update({
      nome:autor.nome,

    
    }, {
      where:{
        id:id
      }
    })
  }

  async function deleteByid(id){
    return await Autor.destroy({
      where:{
        id:id
      },
    });
  }

export default {
    findAll,
    findbyId,
    findbynome,
    save,
    update,
    deleteByid
}