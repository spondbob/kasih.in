# According to:
# http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html#upgrading-from-rails-4-2-to-rails-5-0
# ApplicationRecord is a new superclass for all app models, analogous to app
# controllers subclassing ApplicationController instead of
# ActionController::Base. This gives apps a single spot to configure app-wide
# model behavior.
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
