import React from 'react';
import styles from './createAnnonce.css'
import Input from './component/input/Input';
import SelectPoste from './component/select/Select';
import Buttons from './component/button/Button';

function CreateAnnonce() {
  return (
    <div className={styles['containers']}>
    <h1 className='title'>Publier une Offre d'Emploi</h1>
    <div>
        <p>Sélectionnez des Postes :</p>
        <SelectPoste />
    </div>
    <div className={styles['inputNumber']}>
        <p >Taux Jours Homme :</p>
        <div><Input label={"Number"} type={"number"} variant={"standard"}  /></div>
    </div>
    <div className={styles['inputNumber']}>
        <p >Durée (Jours) :</p>
        <div><Input label={"Délais"} type={"number"} variant={"standard"}  /></div>
    </div>
    <div className={styles['button-d']} >
        <Buttons />
    </div>
</div>
  );
}

export default CreateAnnonce;
