import React from "react"
import {connect} from "react-redux"

class PlayerHandComponent extends React.Component {

    render(){
        return <div>TEST LOL WAGOU</div>
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PlayerHandContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerHandComponent)

export default PlayerHandContainer