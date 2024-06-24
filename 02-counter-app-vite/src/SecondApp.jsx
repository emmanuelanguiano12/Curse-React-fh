import PropTypes from 'prop-types'

export const SecondApp = ({ title, subtitle, name }) => {

  

  return (
    <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
    
  )
}

SecondApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

SecondApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: "No hay subtitulo",
  name: "Emmanuel"
}