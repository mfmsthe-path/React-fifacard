import React from 'react';


function Player({ joueur }) {
  const { Nom, Equipe, Nationalité, NuméroMaillot, Age, ProfilImage } = joueur;

  return (
     <div>
      <img src={ProfilImage}  alt={Nom} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '70%' }} />
      <div></div>
      <h1>{Nom}</h1>
      <img src={Equipe} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '0%' }}/>
      <img src={Nationalité} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '0%' }}/>
      <h1>{NuméroMaillot}</h1>
      <h1>{Age}</h1>
     
    </div>
  );
}



export default Player;


