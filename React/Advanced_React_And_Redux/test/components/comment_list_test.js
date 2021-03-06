import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {

  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other new comment', 'another new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provider', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other new comment');
    expect(component).to.contain('another new comment');
  });

});
