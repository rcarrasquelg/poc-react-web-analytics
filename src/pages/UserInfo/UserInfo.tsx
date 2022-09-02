import { Flex, Button, Input, Box } from 'theme-ui'
import { Nav as Menu } from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'

export const UserInfo = () => {
  return (
    <>
      <Menu />
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
        <Flex
          p={3}
          sx={{
            borderRadius: 'sm',
            border: '1px solid',
            borderColor: 'primary',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Box as="form">
            <h2>Fill your information</h2>
            <Input placeholder="Phone number" type="number" name="phone" mb={3} />
            <Input placeholder="Billing address" type="text" name="billing" mb={3} />
            <Input placeholder="City" type="text" name="city" mb={3} />
          </Box>

          <Flex sx={{ mt: 4, width: '100%', justifyContent: 'space-between' }}>
            <Link to="/products">
              <Button variant="ghost">Back</Button>
            </Link>
            <Link to="/checkout">
              <Button>Next</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
