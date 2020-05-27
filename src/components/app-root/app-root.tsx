import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="header">
          <div class="header-inner">
            <h1>kimulaco blog by StencilJS</h1>
          </div>
        </header>

        <main class="main">
          <div class="main-inner">
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/post/:id' component='app-post' />
              </stencil-route-switch>
            </stencil-router>
          </div>
        </main>
      </div>
    );
  }
}
