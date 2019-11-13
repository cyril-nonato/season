import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectSections } from '../../redux/home/home.selector';
import Footer from './footer.component';


const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

const FooterContainer = compose(connect(mapStateToProps))(Footer);

export default FooterContainer;