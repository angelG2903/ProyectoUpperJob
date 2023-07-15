export const TextArea = ({TextName, styles, styleText}) => {
  return (
    <>
        <h3 className={`${styles}`}>{TextName}</h3>
        <textarea className={`textarea ${styleText}`} placeholder="e.g. Hello world"></textarea>
    </>
  )
}
