class ShowhideController < ApplicationController
  def show_hide
  end

  def do_show
  end

  def do_hide
  end

  def do_fadeout
    render js: "document.querySelector('#thing').classList.add('hidden')"
  end

  def do_fadein
    render js: "document.querySelector('#thing').classList.remove('hidden')"
  end

  def do_shrink
    render js: "document.querySelector('#thing').classList.add('shrunk')"
  end

  def do_unshrink
    render js: "document.querySelector('#thing').classList.remove('shrunk')"
  end

  def do_toggle
    respond_to do |format|
      format.js {}
    end
  end
end
