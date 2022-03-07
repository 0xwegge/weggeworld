import {Button, Page, Card, Grid, Text, Link} from '@geist-ui/core'
import { Icon } from '@iconify/react'

function Github() {
    return(
        <Grid lg={12} xl={12} justify="center" alignContent="center">
          <Card width="100%" margin="20px">
            <Text h4 my={0}>Github</Text>
            <Link target="_blank" href="https://github.com/0x-wegge">
              <Icon icon="icon-park:github" width="64" height="64"></Icon>
            </Link>
            <Grid xs={0} sm={0} md={0} lg={12} xl={12}>
            <Card.Footer>
              <Link color target="_blank" href="https://github.com/0x-wegge">https://github.com/0x-wegge</Link>
            </Card.Footer>
            </Grid>
          </Card>
        </Grid>
    )
}

export default Github