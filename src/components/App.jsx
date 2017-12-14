import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideMenu from './sidemenu/index.jsx'

const style = {
  aside: {
    width: '15rem'
  },
  main: {
    width: 'calc(100% - 15rem)'
  }
};

const GridExampleVerticallyDivided = () => (
  <div>
    <header>Header</header>
    <aside style={style.aside}>
      <SideMenu />
    </aside>
    <main style={style.main}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>

          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </main>
  </div>
)

export default GridExampleVerticallyDivided
