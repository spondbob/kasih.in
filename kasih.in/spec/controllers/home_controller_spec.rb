require 'spec_helper'
require 'rails_helper'

describe HomeController, type: :controller do
  context 'Request page should success' do
    describe 'GET index' do
      before { process :index, method: :get }
      it { is_expected.to respond_with 200 }
    end
    describe 'GET faq' do
      before { process :faq, method: :get }
      it { is_expected.to respond_with 200 }
    end
  end
end
