import React from 'react'

export const Edit = ({ onCancelClick }) => {
  return (
    <div className='flex flex-inline items-start gap-5'>
      <button className=' shadow-button rounded-xl border border-black py-1 px-4 font-nunito text-lg' onClick={onCancelClick}>Cancelar</button>
      <button className='shadow-button rounded-xl border border-violet-blue text-white bg-violet-blue py-1 px-6 font-nunito text-lg'>Guardar cambios</button>
    </div>
  )
}


