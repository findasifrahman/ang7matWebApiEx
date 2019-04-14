using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angularcore2.Controllers
{
    public class pictureController : Controller
    {
        public string serverpath = "Uploads";
        private IHostingEnvironment _hostingEnvironment;
        //string servermappath = "~/Uploads";

        public pictureController(IHostingEnvironment env)
        {
            _hostingEnvironment = env;
        }
        // GET: picture
        [NonAction]
        public ActionResult Index()
        {

            return View();
        }
        //[NoDirectAccess]
        [HttpPost]
        //do not validate request token (XSRF)
        //[AdminAntiForgery(true)]
        public async Task<IActionResult> Upload(string picid)
        {
            string path = Path.Combine(_hostingEnvironment.ContentRootPath, serverpath);
            var fileExists = Request.Form.Files.Count > 0;
            if (fileExists)
            {
                if (!Directory.Exists(path)) Directory.CreateDirectory(path);

                try
                {
                    IFormFile fileBase = Request.Form.Files[0];
                    if (fileBase != null)
                    {
                        string fileName = Path.GetFileName(fileBase.FileName);
                        string ext = Path.GetExtension(fileName);
                        //if(model == null
                       
                        using (var stream = new FileStream(Path.Combine(path, picid + ext), FileMode.Create))
                        {
                            await fileBase.CopyToAsync(stream);
                        }
                       
                        return Json(new { success = true, fileid = picid + ext, full = serverpath + picid + ext, fullpdf = "/images/pdficon.png", error = "" });
                        //fileBase.SaveAs(path + "fileit" + id + ext);
                    }
                }
                catch (Exception ex)
                {
                    return Json(new { success = false, error = ex.Message });
                }
            }
            return Json(new { success = false, fileid = "failed", error = "something went wrong" });
            //return Json(new { success = "false" });
        }

        [HttpPost]
        //[NoDirectAccess]
        //do not validate request token (XSRF)
        //[AdminAntiForgery(true)]
        public JsonResult Delete(string picid)
        {
            string path = Path.Combine(_hostingEnvironment.ContentRootPath, serverpath);


            if (System.IO.File.Exists(Path.Combine(path, picid)))
            {
                System.IO.File.Delete(Path.Combine(path, picid));
            }

            return Json(new { success = true, fileid = path + picid, name = picid, error = "" });


        }
        public static string GetPictureUrl(string picid)
        {
            return "/Uploads/" + picid;
            //for pdf
            //return "/Content/images/pdficon.png";
        }


    }
}