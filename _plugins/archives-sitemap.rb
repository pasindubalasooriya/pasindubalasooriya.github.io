# Tag, category and year archives are thin lists of links to Medium, so they are
# noindex (see _includes/metadata.liquid). Keep them out of the sitemap as well:
# jekyll-archives generates these pages, so front matter defaults never reach them.
Jekyll::Hooks.register :site, :pre_render do |site|
  site.pages.each do |page|
    page.data["sitemap"] = false if page.data["layout"] == "archive"
  end
end
