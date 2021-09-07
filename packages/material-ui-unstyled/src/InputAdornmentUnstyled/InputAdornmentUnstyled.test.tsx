import * as React from 'react';
import { expect } from 'chai';
import { createMount, createClientRender, describeConformanceUnstyled } from 'test/utils';
import InputAdornmentUnstyled, {
  inputAdornmentUnstyledClasses as classes,
} from '@material-ui/unstyled/InputAdornmentUnstyled';

describe('<InputAdornment />', () => {
  const mount = createMount();
  const render = createClientRender();

  describeConformanceUnstyled(
    <InputAdornmentUnstyled position="start">foo</InputAdornmentUnstyled>,
    () => ({
      inheritComponent: 'span',
      render,
      mount,
      refInstanceof: window.HTMLSpanElement,
      testComponentPropWith: 'span',
      slots: {
        root: {
          expectedClassName: classes.root,
        },
      },
    }),
  );

  it('should wrap text children in a span', () => {
    const { container } = render(
      <InputAdornmentUnstyled position="start">foo</InputAdornmentUnstyled>,
    );
    const span = container.querySelector(`.${classes.root}`);

    expect(span).not.to.equal(null);
    expect(span).to.have.text('foo');
  });

  it('should have the disabled pointer events class when disabledPointerEvents true', () => {
    const { container } = render(
      <InputAdornmentUnstyled disablePointerEvents position="start">
        foo
      </InputAdornmentUnstyled>,
    );
    const adornment = container.firstChild;

    expect(adornment).to.have.class(classes.disablePointerEvents);
  });

  it('should render children', () => {
    const { container } = render(
      <InputAdornmentUnstyled position="end">
        <div>foo</div>
      </InputAdornmentUnstyled>,
    );
    const adornment = container.firstChild;

    expect(adornment?.firstChild).to.have.property('nodeName', 'DIV');
  });

  describe('prop: position', () => {
    it('should render span for vertical baseline alignment', () => {
      const { container } = render(
        <InputAdornmentUnstyled position="start">
          <div>foo</div>
        </InputAdornmentUnstyled>,
      );
      const adornment = container.firstChild;

      expect(adornment?.firstChild).to.have.tagName('span');
      expect(adornment?.firstChild).to.have.class('notranslate');
      expect(adornment?.childNodes[1]).to.have.tagName('div');
    });
  });
});
