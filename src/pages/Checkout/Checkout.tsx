import { Flex, Button, Box } from 'theme-ui'
import { Nav as Menu } from '../../components/Nav/Nav'

import productImage1 from '../../assets/images/product_1.png'
import { Link } from 'react-router-dom'
import { Button as Btn } from '../../components/Button/Button'

export const Checkout = () => {
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
            flexDirection: 'column',
            minWidth: 400,
          }}
        >
          <Box>
            <h2>Complete your order</h2>

            <Flex
              p={2}
              sx={{
                borderRadius: 'sm',
                border: '1px solid',
                borderColor: 'muted',
                flexWrap: 'wrap',
                width: '100%',
              }}
            >
              <img style={{ borderRadius: 4 }} src={productImage1} alt="Xbox Control" width={60} />
              <h4 style={{ flex: '1 1', marginLeft: 16 }}>Xbox Control</h4>
            </Flex>
            <Box
              p={2}
              mt={2}
              sx={{
                borderRadius: 'sm',
                border: '1px solid',
                borderColor: 'muted',
                flexWrap: 'wrap',
              }}
            >
              <h4 style={{ margin: '0 0 8px' }}>Order Details</h4>
              <p style={{ margin: 0 }}>Address: 123 Palm Street</p>
              <p style={{ margin: 0 }}>City: Orlando, FL</p>
              <p style={{ margin: 0 }}>Phone Number: +1332654987</p>
            </Box>
          </Box>

          <Flex sx={{ mt: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/download">
              <Btn>Buy Now</Btn>
            </Link>
            <Link to="/products">
              <Button variant="ghost">Cancel</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
