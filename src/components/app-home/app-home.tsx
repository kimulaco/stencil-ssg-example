import { Component, State, h } from '@stencil/core';
import { getPostList } from '../../utils/cms';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State() posts: any[] = [];

  async componentWillLoad() {
    this.posts = await getPostList();
    console.log(this.posts);
  }

  render() {
    return (
      <div class='app-home'>
        {this.posts.map((post: any) => {
          return (
            <div class='post-link'>
              <stencil-route-link url={`/post/${post.id}`}>
                <h2 class="post-link_title">{post.title}</h2>
              </stencil-route-link>
            </div>
          );
        })}
      </div>
    );
  }
}
