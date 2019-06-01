import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Login extends PureComponent {
    render() {
        return  <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Primary title
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>
    }
}

const mapStateToProps = state => {

    return {
        
    }
}

export default connect(mapStateToProps, {

})(Login);