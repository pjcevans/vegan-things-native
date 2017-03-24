import FaDown from 'react-icons/lib/fa/chevron-down'


const HomeShowRecipe = (props) =>
  <Text className="show-next-block">
    <Button className="show-next-button" onClick={() => props.showAnotherRecipe()}>Show next recipe...<br /> <FaDown /></Button>
  </Text>

export default HomeShowRecipe
