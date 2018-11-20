import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'
import {FoodItemContext} from "../../Context/LoggedInContext";

const OpenModal = (props) => {
    return (
        <FoodItemContext.Consumer>
            {foodItemInfo =>
                (
                    <>
                        <Modal open={props.isModalOpen} trigger={props.children} centered={false}>
                            <Modal.Header>{props.title}</Modal.Header>
                            <Modal.Content image>
                                <Image wrapped size='medium' src= {foodItemInfo.images} />
                                <Modal.Description>
                                    <Header>{foodItemInfo.title}</Header>
                                    <p>{foodItemInfo.description}</p>
                                    <p>{foodItemInfo.location.description}</p>
                                    <p>${foodItemInfo.price}</p>
                                    <p>{foodItemInfo.timestamp}</p>
                                    <p>Buy@ {foodItemInfo.contact}</p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </>
            )
            }
        </FoodItemContext.Consumer>
    );
}

export default OpenModal;