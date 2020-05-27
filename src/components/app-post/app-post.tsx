import { Component, Prop, State, h } from '@stencil/core';
import MarkdownIt from 'markdown-it';
import { getPost } from '../../utils/cms';

@Component({
  tag: 'app-post',
  styleUrl: 'app-post.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: any;

  @State() postId: string = '';
  @State() title: string = '';
  @State() content: string = '';

  async componentWillLoad() {
    const markdownIt = new MarkdownIt();

    this.postId = this.match.params.id;

    const post: any = await getPost(this.postId);

    this.title = post.title;
    this.content = markdownIt.render(post.content);
  }

  render() {
    return (
      <div class="app-post">
        <h1 class="title">{this.title}</h1>
        <div class="content" innerHTML={this.content}></div>
      </div>
    );
  }
}
