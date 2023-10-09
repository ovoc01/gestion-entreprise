import "./createAnnonce.css";
import { toast } from "sonner";
import Select from "./select/Select";
import {
  getContrats,
  getServices,
  addAnnonce
} from "../../../../services/annonce-services";
import { useEffect, useState } from "react";

function CreateAnnonce() {
  const [services, setServices] = useState([]);
  const [contrats, setContrats] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedContrat, setSelectedContrat] = useState('');
  const handleServiceChange = (selectedService) => {
    setSelectedService(selectedService);
    console.log(selectedService);
  };
  const handleContratChange = (selectedContrat) => {
    setSelectedContrat(selectedContrat);
  };

  
  const [formData, setFormData] = useState({
    intitule: "",
    tjm: "",
    idService: "",
    idContrat: "",
    deadline: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    async function fetchServices() {
      const response = await getServices();
      console.log(response);
      const data = await response;
      setServices(data);
    }
    fetchServices();
  }, []);
  useEffect(() => {
    async function fetchContrats() {
      const response = await getContrats();
      console.log(response);
      const data = await response;
      setContrats(data);
    }
    fetchContrats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.idService = (selectedService);
      formData.idContrat = (selectedContrat);
      if(handleForm()){
        const response = await addAnnonce(formData); 
        if(response.status===201){
          toast.success(response.data);
        }      else{
          toast.error(response.data);
        }
      }
      else{
        toast.error("Veuillez compléter les champs")
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Une erreur est survenue lors de la création de l'annonce");
    }
  };

  const handleForm = () =>{
      if(formData.deadline.trim()!==""&&formData.intitule.trim()!==""&&formData.tjm.trim()!==""&&formData.idContrat.trim()!==""&& formData.idService!=="")return true;
      return false;
  }

  return (
    <>
      <form action="" className="annonce" onSubmit={handleSubmit}>
        <Select
          name={"Services"}
          label={"Choisissez le services"}
          options={services}
          keyR="idService"
          value={"intitule"}
          onChange={handleServiceChange}
          selectedValue={selectedService}
        />
        <Select
          name={"Contrats"}
          label={"Choisissez le type de contrat"}
          options={contrats}
          keyR={"idContrat"}
          value={"intitule"}
          onChange={handleContratChange}
          selectedValue={selectedContrat}     

        />
        <div className="field">
          <label className="label">Intitulé de poste</label>
          <div class="control">
            <input
              className="input"
              type="text"
              placeholder="Saisissez le nom du post"
              name="intitule"
              onChange={handleChange}
              
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Taux jour homme</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="en heure"
              name="tjm"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Limite dépot de candidature</label>
          <div className="control">
            <input
              className="input "
              type="datetime-local"
              placeholder="jj/mm/aaaa hh:mm"
              name="deadline"
              onChange={handleChange}
              
            />
          </div>
        </div>

        <input
          type="submit"
          className="button is-link"
          value={"Soumettre"}
        />
      </form>
    </>
  );
}

export default CreateAnnonce;
