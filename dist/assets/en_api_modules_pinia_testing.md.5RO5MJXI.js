import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.CvK9B9Lo.js";const f=JSON.parse('{"title":"Module: @pinia/testing","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/modules/pinia_testing.md","filePath":"en/api/modules/pinia_testing.md"}'),n={name:"en/api/modules/pinia_testing.md"},s=i('<p><a href="./../">API Documentation</a> / @pinia/testing</p><h1 id="Module-pinia-testing" tabindex="-1">Module: @pinia/testing <a class="header-anchor" href="#Module-pinia-testing" aria-label="Permalink to &quot;Module: @pinia/testing&quot;">​</a></h1><h2 id="Interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#Interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/pinia_testing.TestingOptions.html">TestingOptions</a></li><li><a href="./../interfaces/pinia_testing.TestingPinia.html">TestingPinia</a></li></ul><h2 id="Functions" tabindex="-1">Functions <a class="header-anchor" href="#Functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createTestingPinia" tabindex="-1">createTestingPinia <a class="header-anchor" href="#createTestingPinia" aria-label="Permalink to &quot;createTestingPinia&quot;">​</a></h3><p>▸ <strong>createTestingPinia</strong>(<code>options?</code>): <a href="./../interfaces/pinia_testing.TestingPinia.html"><code>TestingPinia</code></a></p><p>Creates a pinia instance designed for unit tests that <strong>requires mocking</strong> the stores. By default, <strong>all actions are mocked</strong> and therefore not executed. This allows you to unit test your store and components separately. You can change this with the <code>stubActions</code> option. If you are using jest, they are replaced with <code>jest.fn()</code>, otherwise, you must provide your own <code>createSpy</code> option.</p><h4 id="Parameters" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/pinia_testing.TestingOptions.html"><code>TestingOptions</code></a></td><td style="text-align:left;">options to configure the testing pinia</td></tr></tbody></table><h4 id="Returns" tabindex="-1">Returns <a class="header-anchor" href="#Returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/pinia_testing.TestingPinia.html"><code>TestingPinia</code></a></p><p>a augmented pinia instance</p>',13),o=[s];function r(c,l,d,h,p,u){return a(),t("div",null,o)}const _=e(n,[["render",r]]);export{f as __pageData,_ as default};