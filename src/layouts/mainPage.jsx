import React from 'react'
import List from '../components/lists'

import {
    Container
} from '@material-ui/core'

class MainPage extends React.Component {



    render(){
        return (
            <div>
                <Container>
                    <List items={[1]} />
                </Container>
            </div>
        )
    }
}

export default MainPage