import React from 'react';
import Player from './Player';
import Joueurs from './Joueurs';
import './PlayersList.css'; // Importer le fichier CSS pour le style

function PlayersList() {
  return (
    <div className="players-container"> {/* Utiliser une classe CSS pour définir le style de mise en page */}
    
      {Joueurs.map((joueur, index) => (
        <Player key={index} joueur={joueur} />
      ))}
    </div>
  );
}

export default PlayersList;
