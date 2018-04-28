function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}
const striptags = require('./strip-tags');
const markdownitContainer = require('markdown-it-container');

module.exports = md => {
  // use more markdown-it plugins!
  md.use(markdownitContainer, 'demo', {
    validate: function(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },

    render: function(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = (m && m.length > 1) ? m[1] : '';
        const content = tokens[idx + 1].content;
        const html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
        const script = striptags.fetch(content, 'script');
        const style = striptags.fetch(content, 'style');
        let jsfiddle = { html: html, script: script, style: style };
        const descriptionHTML = description
          ? md.render(description)
          : '';

        jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));
        return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
      }
      return '</div></demo-block>\n';
    }
  })
}
