import React from 'react';
import Routes from './routes';
import MediaModal from './components/MediaModal';
import {connect} from "react-redux";

function App(props: any) {
    const { mediaModalObject } = props;

    return (
        <div>
            {mediaModalObject &&
                <MediaModal
                    isOpen={mediaModalObject.isModalOpen}
                    modalData={mediaModalObject.data}
                />}
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
