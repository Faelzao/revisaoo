import React from 'react';
import "../ProfileImage.css"

const ProfileImage = ({imagem, nome, descrição, preco, características}) => {
    return(
        < div className='card'>
            <h2 className='nome'>{nome}</h2>

            <h3 className='preco'>{preco}</h3>

            <p className='descrição'>{descrição}</p>

            <p className='características'>{características}</p>
            
            
            <img src={imagem} className='imagem'/>


        </div>


    )


}

export default ProfileImage;