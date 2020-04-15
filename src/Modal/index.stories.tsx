import React from 'react'
import useModal from '../hooks/useModal'
import Modal from './'
import Button from '../Button'
import Heading from '../Heading'
import Text from '../Text'

export default {
  title: 'Modal'
}

export const Basic = () => {
  const { isVisible, toggle } = useModal()
  return (
    <>
      <Button variant="blank" onClick={toggle}>
        Toggle modal
      </Button>
      <Modal isVisible={isVisible} onHide={toggle}>
        <Heading size="m" as="h3">
          Delete your organization
        </Heading>
        <Text>
          Are you sure you want to delete your organization? All of your data will be permanently removed. This
          operation cannot be undone.
        </Text>
        <Modal.Footer>
          <Button variant="secondary" size="small" onClick={toggle}>
            Cancel
          </Button>
          <Button variant="primary" size="small" ml="1rem">
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
