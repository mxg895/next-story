import React from 'react';
import Routes from './routes';
import MediaModal from './components/MediaModal';
import {connect} from "react-redux";
import NavigationBar from './components/NavigationBar/index';


function App(props: any) {
    const { mediaModalObject } = props;

    return (
        <div>
            {mediaModalObject &&
                <MediaModal
                    isOpen={mediaModalObject.isModalOpen}
                    modalData={mediaModalObject.data}
                />}
          <NavigationBar/>
          <Routes/>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        mediaModalObject: state.mediaModalReducer.mediaModalObject,
    };
}

export default connect(mapStateToProps)(App);
