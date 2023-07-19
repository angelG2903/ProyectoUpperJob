
export const TextArea = ({TextName, styles, styleText, name, value, onChange, type}) => {
  return (
    <>
        <h3 className={`${styles}`}>{TextName}</h3>
        <textarea 
          className={`textarea ${styleText}`} 
          placeholder="e.g. Hello world"
          name={name}
          value={value}
          onChange={onChange}
          type={type}
        ></textarea>
    </>
  )
}
