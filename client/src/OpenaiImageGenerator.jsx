import React from 'react'
import { useState } from 'react'

export const OpenaiImageGenerator = () => {
  const [inputValue, setInputVale] = useState('')
  const onInputChange = ({ target }) => {
    setInputVale(target.value)
  }

  const [labelErr, setLabelErr] = useState('')
  const [dataErr, setDataErr] = useState('')
  const [labelLoading, setLabelLoading] = useState('')
  const [urlImages, setUrlImages] = useState([])
  const [phrase, setPhrase] = useState('')

  const clearValues = () => {
    setLabelLoading('Loading...')
    setLabelErr('')
    setDataErr('')
    setPhrase('')
    setUrlImages([])
  }

  const onClickButton = async () => {
    clearValues()

    const url = `http://localhost:3333/create-image?phrase=${inputValue}`
    const response = await fetch( url );

    if (response.status != 200) {
      setLabelErr(response.statusText)
      setDataErr(JSON.stringify(await response.json()))
    }
    
    setPhrase(inputValue)
    setUrlImages(await response.json())
    setLabelLoading('')
  }

  return (
    <>
      <h1>Open AI Image Generator</h1>
      <textarea type="text" placeholder='Write youy phrase' onInput={onInputChange } />
      <br/>
      <button onClick={ onClickButton }> Get Images </button>
      <p>{labelLoading}</p>
      <p>{labelErr}</p>
      <p>{dataErr}</p>
      <h3>{phrase}</h3>
      {
        urlImages.map((image) => {
          return <img src={ image.url}></img>
        })
      }
    </>
  )
}
